import db from "../../db.json";
const content = db.posts;
  console.log(content);
{content.map((post) => (
    <Card key={post.id} post={post} />
  ))}

function Card({post}) {
    return (
        <div className="pr-4 mx-4 mt-10 bg-white shadow-xl flex border rounded-lg">
            <div className="basis-2/5 rounded-l-lg" 
            style={{ backgroundImage: 'url(./images/aveiro.jpeg)', 
                backgroundSize: '130%', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center' 
            }}>
            </div>
            <div className="basis-3/5 py-3">
                <div className="flex space-between">
                    <h1 key={post.id} className="flex flex-grow pl-3 font-medium">{post.title}</h1>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                </div>
                <div className="flex items-center pt-5 pl-3">
                    <img img key={post.id} className="w-9 h-9 rounded-full mr-4" src={post.photo} alt={post.altimg}/>
                    <div>
                        <p key={post.id} className="text-black text-sm leading-none mt-1">{post.userId}</p>
                        <p key={post.id} className="text-gray-400 text-xs mt-1">{post.postDate}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card;