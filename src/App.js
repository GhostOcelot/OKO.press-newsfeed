import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

function App() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetch("http://localhost:3000/posts").then(res =>
			res.json().then(data => setPosts(data))
		)
	}, [])

	return (
		<div className="App">
			<ul className="list">
				{posts.map(post => (
					<li key={uuidv4()}>
						<div className="post">
							<div className="post-title-container">
								<a href={post.url} target="blank">
									<h3 className="post-title">{post.title}</h3>
								</a>
							</div>
							<p className="post-date">{post.date.split(" ")[0]}</p>
							<hr className="post-divider" />
							<a href={post.url} target="blank">
								<div className="post-imgContainer">
									<div
										className="post-img"
										style={{ backgroundImage: `url(${post.thumb})` }}
									></div>
								</div>
							</a>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App
