import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImage" src="https://enx2marketing.com/wp-content/uploads/Blogging-For-Marketing-ENX2.jpg" alt="No Image" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet delectus
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div></h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b> Rehman </b>
          </span>
          <span className="singlePostDate">1 Hour Ago </span>

        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quibusdam autem fugit esse, omnis recusandae nulla in necessitatibus enim, laboriosam fuga id excepturi iste dolorum quia qui incidunt nesciunt
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quibusdam autem fugit esse, omnis recusandae nulla in necessitatibus enim, laboriosam fuga id excepturi iste dolorum quia qui incidunt nesciuntLorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quibusdam autem fugit esse, omnis recusandae nulla in necessitatibus enim, laboriosam fuga id excepturi iste dolorum quia qui incidunt nesciuntLorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quibusdam autem fugit esse, omnis recusandae nulla in necessitatibus enim, laboriosam fuga id excepturi iste dolorum quia qui incidunt nesciuntLorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quibusdam autem fugit esse, omnis recusandae nulla in necessitatibus enim, laboriosam fuga id excepturi iste dolorum quia qui incidunt nesciuntLorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quibusdam autem fugit esse, omnis recusandae nulla in necessitatibus enim, laboriosam fuga id excepturi iste dolorum quia qui incidunt nesciuntLorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quibusdam autem fugit esse, omnis recusandae nulla in necessitatibus enim, laboriosam fuga id excepturi iste dolorum quia qui incidunt nesciuntLorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quibusdam autem fugit esse, omnis recusandae nulla in necessitatibus enim, laboriosam fuga id excepturi iste dolorum quia qui incidunt nesciunt
        </p>

      </div>
    </div>
  )
}
