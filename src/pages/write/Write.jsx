import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImage" src="https://th.bing.com/th/id/OIP.mv0id4hEJZNZmHqC3E5CFAHaE8?pid=ImgDet&rs=1" alt="No Image" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                    </div>
                    <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
