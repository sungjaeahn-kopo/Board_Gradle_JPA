import Link from "next/link";
import { Component } from "react";


class PostBoard extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            writer:'',
            content:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState ({
            [e.target.name] : e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title : this.state.title,
            writer : this.state.writer,
            content : this.state.content
        }

        fetch('/api/save', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    goToList(e) {
        
    }

    render() {
        const {title, writer, content} = this.state;
        const {onChange, onSubmit, goToList} = this;

        return (
            <div>
                <h4>new Post</h4>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>title</label>
                        <input type="text" name="title" value={title} onChange={onChange} />
                    </div>
                    <div>
                        <label>writer</label>
                        <input type="text" name="writer" value={writer} onChange={onChange} />
                    </div>
                    <div>
                        <label>content</label>
                        <input type="text" name="content" value={content} onChange={onChange} />
                    </div>
                    <div><button type="submit">작성</button></div>
                </form>
                    <Link href="/board/list">
                        <button>목록으로</button>
                    </Link>
            </div>
        )
    }
}

export default PostBoard;