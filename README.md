Design Stratigy

Component-Based Architecture: The website adopts a component-based architecture, dividing sections such as people, vehicles, and species into individual components. This approach promotes code reuse and modularity, allowing for efficient development and maintenance.

Effective Data Fetching with useEffect Hook: Each component utilizes the useEffect hook to fetch data upon component mounting. This strategic use ensures that data retrieval only occurs when necessary, minimizing redundant API calls and optimizing overall performance.

Responsive Design with Material-UI: Responsive design principles are implemented using Material-UI, a popular React UI framework (specifically used in App.js). This ensures a seamless user experience across various devices and screen sizes, catering to both desktop and mobile users.

Isolation of Data Categories into Separate Components: Each data category, such as people, vehicles, and species, is managed by its own dedicated component responsible for fetching and displaying relevant data. This design choice enhances code cleanliness, modularity, and facilitates independent management of each section.

Styling Choices: Bootstrap is leveraged for styling Bootstrap cards, while CSS modules are employed for additional styling. The inclusion of media queries ensures a visually appealing and user-friendly experience, adapting to different screen sizes effectively.