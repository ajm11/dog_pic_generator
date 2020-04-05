
window.onload = async function(){
      // Add a button to generate a dog pic
      var addButton = document.createElement('BUTTON');
      addButton.setAttribute("id","dogButton");
      addButton.innerHTML = "Find me a dog";
      addButton.addEventListener('click', async function(){
        // Delete all existing posts
        let arePosts = document.getElementById("allThePosts");
        if (arePosts != null){
          arePosts.remove();
        };

        // Scrape Reddit
        let r = await fetch('https://www.reddit.com/r/dogpics/.json');
        let responseJSON = await r.json();

        // Determine which picture to show
        let numberPics = responseJSON.data.children.length;
        let picNumber = Math.floor(numberPics * Math.random());

        // Display all posts
        let postHolder = document.createElement('div');
        postHolder.setAttribute("id","allThePosts");
        console.log(picNumber);
        console.log(responseJSON.data.children[picNumber].data.thumbnail);
        
        let randomPic = document.createElement('img');
        randomPic.src = responseJSON.data.children[picNumber].data.thumbnail;
        randomPic.style.width = "600px";

        // Add line break
        let linebreak = document.createElement('br');
        
        postHolder.appendChild(linebreak);
        postHolder.appendChild(randomPic);
        document.body.appendChild(postHolder);        
  
      });
      document.body.appendChild(addButton);
  }
  