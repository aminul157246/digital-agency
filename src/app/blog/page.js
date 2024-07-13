import Image from "next/image";
import Link from "next/link";


async function getData() {
    const res = await fetch(`http://localhost:3000/api/posts`,
        {caches : "no-store"}
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const BlogPage = async () => {

    const data = await getData()
    console.log(data);

    return (
        <div>
            {
                data.map(item => <Link href='/blog/testID' key={item._id}>
                    <div className="flex justify-center items-center mt-4" >
                    <div>
                        <Image src={item.img} width={300} height={300} alt="blog_img" />
                    </div>
                    <div>
                        <h2>{item.title} </h2>
                        <p>{item.desc} </p>
                    </div>
                    </div>
                </Link>)
            }
        </div>
    );
};

export default BlogPage;