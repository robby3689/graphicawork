# How to Add Your Founder Image

## Steps to Replace the Placeholder with Your AI-Generated Image:

### 1. Save Your Image
- Save your AI-generated founder image to the `src/components/` folder
- Name it something like `founder-image.jpg` or `founder-image.png`

### 2. Update the About.js File
Replace the current image source in `src/pages/About.js`:

```javascript
// Add this import at the top of About.js
import founderImage from '../components/founder-image.jpg';

// Then replace the img src with:
<img 
  src={founderImage} 
  alt="Robby Singh - Founder of Graphica Work" 
  className="founder-photo"
  onError={(e) => {
    e.target.style.display = 'none';
    e.target.nextElementSibling.style.display = 'flex';
  }}
/>
```

### 3. Image Specifications
- **Recommended size**: 300x300 pixels (square)
- **Format**: JPG or PNG
- **Quality**: High resolution for best display
- **Style**: Professional headshot or portrait

### 4. Current Setup
The founder section is now ready with:
- ✅ Professional styling and layout
- ✅ Responsive design for mobile
- ✅ Hover effects and animations
- ✅ Fallback placeholder if image fails to load
- ✅ Proper alt text for accessibility

### 5. Testing
After adding your image:
1. Refresh your website
2. Navigate to the About page
3. Check that the image displays correctly
4. Test on mobile to ensure responsive design works

The founder section will automatically display your image once you follow these steps!
