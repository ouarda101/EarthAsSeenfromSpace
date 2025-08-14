const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual NASA API key

const datePicker = document.getElementById('date-picker');
const viewButton = document.getElementById('view-button');
const epicImage = document.getElementById('epic-image');
const loadingSpinner = document.getElementById('loading-spinner');

const imageTitle = document.getElementById('image-title');
const imageDate = document.getElementById('image-date');
const imageCaption = document.getElementById('caption');
const coordinates = document.getElementById('coordinates');
const satPosition = document.getElementById('sat-position');


viewButton.addEventListener('click', () => {
    const selectedDate = datePicker.value;
    if (selectedDate) {
        fetchEpicImage(selectedDate);
    } else {
        alert('Please select a date.');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    datePicker.value = formattedDate;
    fetchEpicImage(formattedDate);
});

async function fetchEpicImage(date) {
    
    loadingSpinner.classList.remove('hidden');
    epicImage.classList.add('hidden');
    imageTitle.textContent = '';
    imageCaption.textContent = '';
    imageDate.textContent = '';
    coordinates.textContent = '';
    satPosition.textContent = '';

    try {
        
        const metadataUrl = `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`;
        const response = await fetch(metadataUrl);

        if (!response.ok) {
            throw new Error('No images found for this date.');
        }

        const data = await response.json();
        
        if (data.length === 0) {
            throw new Error('No images available for the selected date.');
        }

        
        const firstImage = data[0];

        
        const imageFilename = firstImage.image + '.jpg';
        const dateParts = firstImage.date.split(' ')[0].split('-');
        const [year, month, day] = dateParts;

        const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${imageFilename}`;

        
        epicImage.src = imageUrl;
        epicImage.alt = firstImage.caption;
        imageTitle.textContent = firstImage.caption;
        imageDate.textContent = `Date: ${firstImage.date.split(' ')[0]} at ${firstImage.date.split(' ')[1]} UTC`;
        imageCaption.textContent = 'This image was taken by NASA\'s EPIC camera onboard the NOAA DSCOVR spacecraft.';

        const lat = firstImage.centroid_coordinates.lat.toFixed(2);
        const lon = firstImage.centroid_coordinates.lon.toFixed(2);
        coordinates.textContent = `Latitude: ${lat}, Longitude: ${lon}`;

        const satX = firstImage.dscovr_j2000_position.x.toFixed(2);
        const satY = firstImage.dscovr_j2000_position.y.toFixed(2);
        const satZ = firstImage.dscovr_j2000_position.z.toFixed(2);
        satPosition.textContent = `X: ${satX}, Y: ${satY}, Z: ${satZ}`;

        
        epicImage.onload = () => {
            loadingSpinner.classList.add('hidden');
            epicImage.classList.remove('hidden');
        };

    } catch (error) {
        
        console.error('Error fetching data:', error);
        loadingSpinner.classList.add('hidden');
        epicImage.src = ''; // Clear image
        imageTitle.textContent = 'Error: ' + error.message;
        imageCaption.textContent = '';
        imageDate.textContent = '';
        coordinates.textContent = '';
        satPosition.textContent = '';
    }
}