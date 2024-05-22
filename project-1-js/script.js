var yourWeather = prompt("Enter Your Area's Weather \n Hot \n cold \n snowy \n foggy \n rainy \n windy \n cloudy");
 


document.write("<center>"+"<h1>"+"Weather Broadcast"+"</h1>"+"</center>");


if (yourWeather === "hot"){
    document.write("<center>"+"<img src='https://th.bing.com/th?id=OIP.qnoJsHlsXChrl7_x4h4kAAHaHp&w=245&h=254&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' width='20%'>"+"</br>"+"<h3>"+"Its "+ yourWeather+" Today"+"</h3>"+"</center>");
}
else if (yourWeather === "cold"){
    document.write("<center>"+"<img src='https://th.bing.com/th?q=Cold+Weather+Cartoon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247' width='20%'>"+"</br>"+"<h3>"+"Its "+ yourWeather+" Today"+"</h3>"+"</center>");
}
 else if (yourWeather === "snowy"){
    document.write("<center>"+"<img src='https://th.bing.com/th/id/OIP.9aZ3hspwhBrDAaop_0hCUwHaHE?pid=ImgDet&w=208&h=198&c=7&dpr=1.5' width='20%'>"+"</br>"+"<h3>"+"Its "+ yourWeather+" Today"+"</h3>"+"</center>");
}
else if (yourWeather === "foggy"){
    document.write("<center>"+"<img src='https://th.bing.com/th?id=OIP.s0JicMWxmVr1Cg9Z-8-isAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' width='20%'>"+"</br>"+"<h3>"+"Its "+ yourWeather+" Today"+"</h3>"+"</center>");
}
else if (yourWeather === "rainy"){
    document.write("<center>"+"<img src='https://th.bing.com/th?q=Rainy+Day+Animated+Emoji&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247' width='20%'>"+"</br>"+"<h3>"+"Its "+ yourWeather+" Today"+"</h3>"+"</center>");
}
else if (yourWeather === "windy"){
    document.write("<center>"+"<img src='https://th.bing.com/th/id/OIP.IN7XyfxuAYXeh9jIfPIJsAHaF3?w=219&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' width='20%'>"+"</br>"+"<h3>"+"Its "+ yourWeather+" Today"+"</h3>"+"</center>");
}
else if (yourWeather === "cloudy"){
    document.write("<center>"+"<img src='https://th.bing.com/th/id/OIP.7O03Jp5NGO1QjfjPXpwWUQHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' width='20%'>"+"</br>"+"<h3>"+"Its "+ yourWeather+" Today"+"</h3>"+"</center>");
}

else {
    document.write("<center>"+"<img src='https://th.bing.com/th?id=OIP.1XOdtOuunzFyMmmiBbX2SgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' width='20%'>"+"</br>"+"<h3>"+"We watching you"+"</h3>"+"</center>");
}





