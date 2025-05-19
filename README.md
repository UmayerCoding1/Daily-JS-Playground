# JavaScript Daily Learning & Projects

This repository, maintained by **Md. Umayer Hossain**, is dedicated to learning new JavaScript topics every day and building projects to increase my knowledge and practical skills.

**Start Date:** May 18, 2025


## What You'll Find Here

- **Daily Learning:** Each day, I (Md. Umayer Hossain) explore a new JavaScript concept, feature, or best practice.
- **Practice Exercises:** Hands-on exercises to reinforce what I learn.
- **Projects:** Small JavaScript projects to apply and deepen my understanding.

## Folder Structure

- `/practice/day-1` - Practice exercises for Day 1
- `/practice/day-2` - Practice exercises for Day 2
- `/projects` - JavaScript projects to apply new knowledge

## Project Details

### `/projects/pei-chart` 

A dynamic pie chart project to visualize expenses.  
👉 [Demo](https://stellar-boba-a7c78b.netlify.app/)

**Files:**
- `index.html` – Main HTML structure for the pie chart app.
- `app.js` – JavaScript logic for drawing the pie chart, handling form input, and updating the chart dynamically.
- `style.css` – Styling for the pie chart app.


### `/projects/Line-chart` 

# Interactive Line Chart Project

A responsive and interactive line chart visualization built with vanilla JavaScript, HTML, and CSS. This project demonstrates how to create a professional-looking line chart with multiple datasets, interactive features, and responsive design.

## Features

- 📊 Multiple dataset visualization (Sales, Revenue, Profit)
- 🎨 Clean and modern UI with gradient background
- 🔍 Interactive tooltips on data points
- 📱 Fully responsive design
- 🖱️ Clickable legend to toggle datasets
- 📈 Dynamic grid lines
- 🎯 Smooth animations and transitions
- 📅 Monthly data visualization

## Project Structure

```
Line-Chart/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
├── app.js          # Chart logic and interactivity
```

## Technical Details

### Data Structure
The chart uses a structured data format:
```javascript
{
    months: ['Jan', 'Feb', 'Mar', ...],
    datasets: [
        {
            name: 'Sales',
            color: '#4CAF50',
            values: [65, 59, 80, ...]
        },
        // More datasets...
    ]
}
```

### Key Features Implementation
- SVG-based chart rendering
- Dynamic scaling based on container size
- Interactive tooltips with data details
- Responsive grid system
- Dataset toggling through legend
- Smooth animations for better UX

## How to Use

1. Clone or download the project
2. Open `index.html` in a modern web browser
3. Interact with the chart:
   - Hover over data points to see detailed information
   - Click legend items to toggle datasets
   - Resize the window to see responsive behavior

## Customization

### Adding New Datasets
To add a new dataset, modify the `data` object in `app.js`:
```javascript
datasets: [
    {
        name: 'New Dataset',
        color: '#YOUR_COLOR',
        values: [/* your values */]
    }
]
```

### Styling
- Modify colors and dimensions in `style.css`
- Adjust chart padding and grid lines in `config` object
- Customize tooltip appearance in CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

No external dependencies required. Built with vanilla JavaScript, HTML5, and CSS3.

## Author

Md. Umayer Hossain

## License

This project is open source and available under the MIT License. 

#### Workflow

1. Open `index.html` in your browser.
2. Use the form to add a new expense slice by entering a label, value, and color.
3. On submission, the pie chart updates dynamically to include the new slice.
4. The legend below the chart shows each slice's label and percentage.
5. All logic and rendering are handled by `app.js`, and styles are managed in `style.css`.

### Problem Solving Section

This section contains JavaScript problem-solving exercises organized by difficulty levels.

#### Structure
- `/Problem solving/question` - Contains problem statements and requirements
- `/Problem solving/Problem solution` - Contains solutions organized by difficulty levels
  - `01_lavel` - Basic JavaScript problems
  

#### Sample Problems
1. Compare Two Numbers
2. Find Maximum in Array
3. Filter Products by Price
4. Capitalize First Letters

Each problem includes:
- Clear problem statement
- Specific requirements and constraints
- Solution implementation
- Best practices and optimization techniques
=======


## How to Use

1. Clone the repo:
   ```bash
   git clone https://github.com/UmayerCoding1/Daily-JS-Playground.git
   ```
2. Explore the folders for daily topics, exercises, and projects by Md. Umayer Hossain.
3. Use the code as reference or inspiration for your own learning journey!

---

Happy coding and continuous learning!  
**Maintained by Md. Umayer Hossain**
