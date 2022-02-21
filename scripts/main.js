async function apiCall(url) {
//add api call logic here
    try {
        var res = await fetch(url);
        var data = await res.json();
        return data;
    } catch (error) {
        console.log('error:', error)  
    }

}


function appendArticles(articles, main) {
    var article = [];
 //add append logic here
 articles.map((obj)=>{
    var div = document.createElement("div");
    div.id = "card";
    div.addEventListener("click",()=>{
        article.push(obj);
        localStorage.setItem("article",JSON.stringify(article))
        window.location.href = "./news.html"
    })
    var div1 = document.createElement("div");
    var tit = document.createElement("p");
    tit.textContent = obj.title;
    var div2 = document.createElement("div");
    var des = document.createElement("p");
    des.textContent= obj.description;
    var div3=  document.createElement("div");
    var immg = document.createElement("img");
    immg.src = obj.urlToImage;
    div1.append(tit);
    div2.append(des);
    div3.append(immg);
    div.append(div1,div2,div3);
    main.append(div)
 })

}

export { apiCall, appendArticles }
