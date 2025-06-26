
# Umakshi's Portfolio Website

A modern, interactive portfolio website built with React and 3D elements.

## 🚀 How to Run This Website on Your Computer

Follow these simple steps to get the website running on your local machine:

### Step 1: Install Node.js
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS version** (recommended for most users)
3. Run the installer and follow the setup wizard
4. Keep all default settings during installation

### Step 2: Download the Code
1. Click the green "Code" button on this page
2. Select "Download ZIP"
3. Extract the ZIP file to a folder on your computer (like Desktop or Documents)
4. Remember where you saved it!

### Step 3: Open Command Prompt/Terminal
**On Windows:**
- Press `Windows Key + R`
- Type `cmd` and press Enter

**On Mac:**
- Press `Command + Space`
- Type `Terminal` and press Enter

**On Linux:**
- Press `Ctrl + Alt + T`

### Step 4: Navigate to Your Project Folder
In the command prompt/terminal, type:
```bash
cd path/to/your/extracted/folder
```

**Example:**
- If you saved it to Desktop: `cd Desktop/umakshi-interactive-glow-main`
- If you saved it to Documents: `cd Documents/umakshi-interactive-glow-main`

**💡 Tip:** You can drag and drop the folder into the terminal window to get the correct path!

### Step 5: Install Dependencies
Copy and paste this command, then press Enter:
```bash
npm install
```

Wait for it to finish (this might take a few minutes). You'll see lots of text scrolling - this is normal!

### Step 6: Start the Website
Copy and paste this command, then press Enter:
```bash
npm run dev
```

### Step 7: View Your Website
1. Look for a message like: `Local: http://localhost:5173/`
2. Hold `Ctrl` (or `Cmd` on Mac) and click on the link
3. Your website will open in your default browser!

## 🎉 You Did It!

Your website is now running! You can:
- View it at `http://localhost:5173/`
- Make changes to the code and see them update automatically
- Stop the website by pressing `Ctrl + C` in the terminal

## 🔧 Troubleshooting

**Problem: Command not found**
- Make sure Node.js is properly installed
- Restart your terminal and try again

**Problem: Permission errors**
- On Mac/Linux, try adding `sudo` before the command: `sudo npm install`

**Problem: Port already in use**
- Try a different port: `npm run dev -- --port 3000`

**Problem: Website won't load**
- Make sure you're using the correct URL shown in the terminal
- Try refreshing the browser page

## 📁 Project Structure

```
umakshi-interactive-glow/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── pages/             # Website pages
│   └── styles/            # Styling files
├── public/                # Static files
├── package.json           # Project dependencies
└── README.md             # This file!
```

## 🛠 Built With

- **React** - For building the user interface
- **TypeScript** - For better code quality
- **Tailwind CSS** - For styling
- **Three.js** - For 3D graphics
- **Vite** - For fast development

## 📝 Need Help?

If you run into any issues:
1. Make sure you followed all steps in order
2. Check that Node.js is properly installed: `node --version`
3. Try deleting the `node_modules` folder and running `npm install` again
4. Search for your specific error message online

---

**Happy coding! 🎨✨**
