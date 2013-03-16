var totallyLegitDB = (function(db){
  
  $.get("/data/db.txt", function(data, error){
    var rawMemes = data.split("\n~\n");
    
    var memes = [];
    
    for(var i=0; i<rawMemes.length; ++i){
      var rawMeme = rawMemes[i].split("\n");
      var meme = {};
      if(rawMeme.length==0){
        continue;
      }
      
      if(rawMeme.length>2){
        meme.top = rawMeme[0];
        meme.bottom = rawMeme[1];
        meme.img = rawMeme[2];
      }else{
        meme.bottom = rawMeme[0];
        meme.img = rawMeme[1];
      }
      
      memes.push(meme);
    } 
    
    db.memes = memes; 
  });

  

  return db;
})(totallyLegitDB || {});
