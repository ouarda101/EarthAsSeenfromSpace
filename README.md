# 🌍 Earth From Space: NASA EPIC Imagery

## This is a simple web application that displays the latest images of Earth captured by NASA's Earth Polychromatic Imaging Camera (EPIC) on board the DSCOVR satellite. 

Users can select a specific date and view a beautiful, high-resolution image of our planet, along with detailed metadata about the satellite's position.


### 🚀 Features

* Daily Imagery: Automatically fetches and displays the most recent Earth image from the NASA EPIC API.
* Date Selection: Allows users to choose a specific date to view historical images.
* Detailed Metadata: Shows important contextual information for each image, including:
* Image filename and capture date
* Geographical centroid coordinates
* The positions of the DSCOVR satellite

### ⚙️ Technologies Used

* HTML5: For the basic structure of the web page.
* CSS3: For styling, including the dark theme and responsive layout.
* JavaScript (ES6+): For fetching data from the API and dynamically updating the page content.
* NASA EPIC API: The data source for the daily Earth imagery and metadata.

### 💻 Setup and Usage

To run this project locally, follow these simple steps:

1. Clone the repository:

`git clone https://github.com/your-username/your-repository-name.git`

`cd to https://github.com/ouarda101/EarthAsSeenfromSpace`

2. Get a NASA API Key:

* Go to the NASA Open APIs signup page.
* Fill out the form and submit it. You will receive a key via email.
* Add your API Key:

  * Open `script.js` in a text editor.
  * Find the line `const apiKey = 'YOUR_API_KEY';`
  * Replace `'YOUR_API_KEY'` with the key you received from NASA.

3. Run the application:

4. Simply open the `index.html` file in your web browser. There is no server required!

### ✨ Demo

<img width="1920" height="1631" alt="interface 1" src="https://github.com/user-attachments/assets/c4421e2c-bfd2-423f-a639-65ffadd14aa6" />

🔮 Future Enhancements

* Add a gallery view to see all available images for a selected date.
* Implement a loading indicator to improve user experience while the data is being fetched.
* Display the image's geographical coordinates on an interactive map.

📝 License

This project is open-source and available under the MIT License.
