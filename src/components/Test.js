import db from "../../db.json";

export default function Test() {
  const content = db.posts;
  console.log(content);
  return (
    <div className="flex flex-col">
      {content.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
      
  
        <p key={post.id}>{post.location}</p>
        
      
    
        <p key={post.id}>{post.postDate}</p>
      
     
        <img key={post.id}>{post.photo}</img>

      
    </div>
  );
}

{/*
  export default function Test() {
  const content = db.posts;
  console.log(content);

    return (
      <div>
        <div>
          <div>
            <Title>{this.props.id.post.title}</Title>
            <Date>{this.props.id.post.postDate}</Date>
            <Photo>{this.props.id.post.photo}</Photo>
          </div>
        </div>
      </div>
    );
  }
}

*/ }
