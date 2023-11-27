# FoundABird-App
This is the final project of a mobile programming course. I started to think about what a normal person who enjoys the outdoors and is interested in observing birds might need. I came up with an idea that the app should include the ability to save birds you see in to a list. If you don't recognize a particular bird, you can check a picture or information from the database. Then I thought that maybe a map would be cool, so you can check the actual location of your sightings.
 
<img src="https://raw.githubusercontent.com/villlekorhonen/FoundABird-App/master/images/Homepage.jpg" alt="Etusivu" width="300">
This is the front page, where you can select your actions. Save sighting if you want to save a observation. 'My Birds' is the list screen, where there is a list of birds you have seen and saved observations. 'All Birds of Finland' is where you can find birds in Finland. 'Weather' shows the actual weather in your current location, and you can also type a location to check the weather. 'Map' will show your current location. I have used the React library, React Hooks like useState, React Navigation, and components of React Native Elements.

<img src="https://raw.githubusercontent.com/villlekorhonen/FoundABird-App/master/images/SavePAge.jpg" alt="Etusivu" width="300">
Save Sighting. Here you can type the name of the bird, place, and date. This observation will go into the list after you push the save button. I have used the React library, React Hooks, SQLite to store data, and elements like Input and Button from the React Native Elements library.


<img src="https://raw.githubusercontent.com/villlekorhonen/FoundABird-App/master/images/ListPage.jpg" alt="Etusivu" width="300">
My Birds. This is a list of your observations. You can delete your sighting by pressing the trashcan. It will ask if you are sure about this before you can delete it. This screen is built in the same way as the previous one, using the same techniques, libraries, and components. 


<img src="https://raw.githubusercontent.com/villlekorhonen/FoundABird-App/master/images/BirdDatabase.jpg" alt="Etusivu" width="300">
List of Birds in Finland. Here you can find all the birds of Finland that are available. Unfortunately, only some of the birds have pictures, and this is a limitation of the API. React and React Native Elements are also used in this application. 


<img src="https://raw.githubusercontent.com/villlekorhonen/FoundABird-App/master/images/WeatherPage.jpg" alt="Etusivu" width="300">
Weather. Here, you can check the current and next days' forecast for the weather in your current location. The app will use autoFetchLocation to obtain the location automatically. You can also search for the weather by the name of the place. OpenWeatherMap is the API used for this screen. 


<img src="https://raw.githubusercontent.com/villlekorhonen/FoundABird-App/master/images/MapPage.jpg" alt="Etusivu" width="300">
Map. It shows your location. This one uses React and React Native Elements libraries, as well as all the other screens. The React-native-maps library is used to create a map view. The Expo-location module is used for fetching the location.

