<h1>marketplace-react</h1>
<hr><p>Marketplace for OpenWeather written in React.JS</p><h2>General Information</h2>
<hr><ul>
Order customised weather data for any number of selected locations.
</ul><h2>Structure</h2>
<hr>
<pre>├───api
├───assets
│   └───scss
├───components
├───features
│   ├───auth
├───pages
└───utils</pre>
<h2>Components</h2>
<hr>
<code>DataUSState.js</code>
<p>Historical Weather Data by State page, currently inactive, no imported components.</p>
<code>HistoryBulk.js</code>
<p>Create New History Bulk page, main page for ordering weather data, all components listed below.</p>
<code>HistoryForecastBulk.js</code>
<p>Create New History Forecast Bulk page, main page for ordering weather data, all components listed below.</p>
<code>Home.js</code>
<p>Home page showing only data, no imported components.</p>
<code>MyOrders.js</code>
<p>Displays the user's processed orders, requests user's orders from API and renders them in a table, contains functionality for downloading CSV/JSON file.</p>
<h2>Components</h2>
<hr>
<code>checkBox.js</code>
<p>Component for handling the weather parameter checkboxes on Create New History Bulk page.</p>
<code>checkBoxFile.js</code>
<p>Component for handling the file format checkboxes.</p>
<code>checkBoxHistory.js</code>
<p>Component for handling the weather parameter checkboxes on Create New History Forecast Bulk page.</p>
<code>DatePicker.js</code>
<p>Component for the From and To dates on Create New History Bulk Page.</p>
<code>DatePickerForecast.js</code>
<p>Component for the From and To dates on Create New History Forecast Bulk Page.</p>
<code>EditName.js / EditNameCard.js</code>
<p>Component for updated location name in list of added locations / modal containing edit component.</p>
<code>DeleteTrigger.js</code> / <code>DeleteTriggerCard.js</code>
<p>Displays existing events for this trigger and shows a confirmation modal before user chooses to delete trigger.</p>
<code>EditableInput.js</code>
<p>Reusable component for editing and saving trigger names.</p>
<code>EditTrigger.js</code> / <code>EditTriggerCard.js</code>
<p>Displays modal allowing user to change name and status of their trigger and updates on save.</p>
<code>InfoWindow.js</code>
<p>Displays a window on the map when clicked or when location / coordinates are selected in form for Create New History Bulk.</p>
<code>InfoWindowHistory.js</code>
<p>Component for checkout modal, a three-part form with validation, plus .</p>
<code>InvoiceHistoryPopBulk.js</code>
<p>Component for checkout modal, a three-part form with validation, plus post request and redirect to Stripe, for Create New History Forecast Bulk.</p>
<code>InvoicePopBulk.js</code>
<p>Component for checkout modal, a three-part form with validation, plus post request and redirect to Stripe, for Create New History Bulk.</p>
<code>Location.js</code>
<p>Main location component for Create New History Bulk, contains all locations components.</p>
<code>LocationAutoComplete.js</code>
<p>Component for location using Google autocomplete API.</p>
<code>LocationCoordinates.js</code>
<p>Component for submitting coordinates using return key.</p>
<code>LocationsForecast.js</code>
<p>Main location component for Create New History Forecast Bulk, contains all locations components.</p>
<code>LocationsList.js</code>
<p>Component showing all locations added by the user in an array, with EditName component for Create New History Bulk.</p>
<code>LocationsListHistory.js</code>
<p>Component showing all locations added by the user in an array, with EditName component for Create New History Forecast Bulk.</p>
<code>Map.js</code>
<p>Displays customised Google Map component for Create New History Bulk.</p>
<code>MapHistory.js</code>
<p>Displays customised Google Map component for Create New History Forecast Bulk.</p>
<code>Parameters.js</code>
<p>Main component containing all parameter components for Create New History Bulk.</p>
<code>ParametersForecast.js</code>
<p>Main component containing all parameter components for Create New History Forecast Bulk.</p>
<code>ParamsDownload.js</code>
<p>Component for download parameters modal.</p>
<code>ParamsFile.js</code>
<p>Component for file parameters modal.</p>
<code>ParamsHistoryWeather.js</code>
<p>Component containing weather parameter checkbox in modal for Create New History Forecast Bulk.</p>
<code>ParametersUnit.js</code>
<p>Component for units parameters modal.</p>
<code>ParamsWeather.js</code>
<p>Component containing weather parameter checkbox in modal for Create New History Bulk.</p>
<code>Step0Bulk.js</code>
<p>Component for first step in checkout modal for Create New History Bulk.</p>
<code>Step0HistoryBulk.js</code>
<p>Component for first step in checkout modal for Create New History Forecast Bulk.</p>
<code>Step1.js</code>
<p>Component for second step in checkout modal.</p>
<code>Step2.js</code>
<p>Component for last step in checkout modal.</p>
<h2>Available Scripts</h2>
<hr><p>In the project directory, you can run:</p>
<h3><code>npm start</code></h3>
<p>Runs the app in the development mode.<br>
Open <a href="http://localhost:3000">http://localhost:3000</a> to view it in the browser.</p>
<p>The page will reload if you make edits.<br>
You will also see any lint errors in the console.</p>
<h3><code>npm test</code></h3>
<p>Launches the test runner in the interactive watch mode.<br>
See the section about <a href="https://facebook.github.io/create-react-app/docs/running-tests">running tests</a> for more information.</p>
<h3><code>npm run build</code></h3>
<p>Builds the app for production to the <code>build</code> folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.</p>
<p>The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!</p>
<p>See the section about <a href="https://facebook.github.io/create-react-app/docs/deployment">deployment</a> for more information.</p>
<h3><code>npm run eject</code></h3>
<p><strong>Note: this is a one-way operation. Once you <code>eject</code>, you can’t go back!</strong></p>
<p>If you aren’t satisfied with the build tool and configuration choices, you can <code>eject</code> at any time. This command will remove the single build dependency from your project.</p>
<p>Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except <code>eject</code> will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.</p>
<p>You don’t have to ever use <code>eject</code>. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.</p>
<h3><code>npm run lint -- --fix</code></h3>
<p>Runs ESLint to check for problematic patterns in your JS code.</p>
<h3><code>npm format</code></h3>
<p>Runs Prettier to fix problematic formatting in your code.</p>
<h2>Deploy to Test Server</h2>
<hr>
<code>https://dashboard-weather.owm.io/forecasted-events</code>
<p>Test server URL</p>
<code>git push</code>
<p>1. Push the changes on your branch.</p>
<p>2. Make sure pipelines have passed. You can see it in gitlab in either Repository/Commits section.</p>
<code>(https://gitlab.openweathermap.org/frontend/owm-account/-/commits/your_branch)</code>
<p><code>(https://gitlab.openweathermap.org/frontend/owm-account/-/pipelines)</code> CI/CD Pipelines</p>
</br>
<p>3. Update the container on the server:</p>
<code>ssh YOURNAME@phase.owm.io</code>
<p>log in to the server</p>
<code>cd /opt/containers/weather-dashboard</code>
<p>move to your project folder</p>
<code>./update.sh --branch name-- </code>
<p>call update on the branch you are pushing, in this case <code>./update.sh your_branch</code>)</p> 