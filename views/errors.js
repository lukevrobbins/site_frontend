<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= title %></title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <%- include('partials/header', { title: title }) %>
  
  <main class="container">
    <section class="about-section">
      <h2>Error</h2>
      
      <div style="margin: 30px 0; padding: 20px; border-radius: 5px; background-color: #ffcccc;">
        <h3 style="margin-top: 0; color: #cc0000;">Something went wrong</h3>
        <p><%= message %></p>
        <% if (error) { %>
          <div style="margin-top: 20px;">
            <h4>Technical Details:</h4>
            <p style="font-family: monospace; background-color: #f9f9f9; padding: 10px; border-left: 3px solid #cc0000;"><%= error %></p>
          </div>
        <% } %>
      </div>
      
      <div style="margin-top: 20px;">
        <a href="/" style="display: inline-block; padding: 10px 15px; background-color: #f3f3f3; color: #333; text-decoration: none; border-radius: 4px; transition: background-color 0.3s;">Back to Home</a>
      </div>
    </section>
  </main>
</body>
</html>