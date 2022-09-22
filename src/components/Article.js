import React from "react";

function Article({ date = "January 1, 1970", title, preview, id }) {
   return (
     <article>
       <h3 key={id}>{title}</h3>
       <small>{date}</small>
       <p>{preview}</p>
     </article>
   )
};

export default Article;