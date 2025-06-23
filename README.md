# Dog Image Gallery

A simple, responsive web application that displays random dog images and allows users to search for specific dog breeds using the Dog CEO API.

## API Used

**Dog CEO API**: https://dog.ceo/api/
- Free, public API with no authentication required
- Provides random dog images and breed-specific images
- RESTful endpoints with JSON responses

## How It Works

### Core Features
1. **Random Dog Images**: Displays 5 random dog photos on page load
2. **Breed Search**: Users can search for specific dog breeds to see 5 images of that breed
3. **Responsive Design**: Gallery adapts to different screen sizes using flexbox

### API Endpoints Used
- `GET https://dog.ceo/api/breeds/image/random/5` - Fetches 5 random dog images
- `GET https://dog.ceo/api/breed/{breed}/images/random/5` - Fetches 5 random images of a specific breed

### Technical Implementation
- **HTML**: Structure with input field, buttons, and image gallery container
- **CSS**: Responsive flexbox layout with clean styling and hover effects and nice poppins font
- **JavaScript**: 
  - Async/await for API calls
  - Dynamic DOM manipulation to display images
  - Error handling for invalid breed searches
  - Event-driven user interactions

### User Flow
1. Page loads with 5 random dog images
2. User can click "reload" to refresh with new random images
3. User can enter a breed name and click "Search Breed" to see specific breed images
4. Invalid breed names show an alert message

### Error Handling
- Input validation (empty breed name)
- API error responses (invalid breeds)
- Network error handling with try-catch blocks


## Browser Compatibility
Works in all modern browsers that support:
- Fetch API
- Async/await
- ES6 features
- Flexbox
