import Image from "next/image";

const Gallery = ({ gallery }) => {
    const firstPic = gallery[0]
    const other = [...gallery]
    other.shift()

    return (
        <section className="container">
            <div className="grid grid-cols-2 imageshowCase gap-1">
                <Image src={firstPic} className="h-[400px] rounded hover:border hover:border-white" alt="first" height={400} width={400} />

                <div className="grid grid-cols-2 grid-rows-2 h-[400px] gap-1">
                    {
                        other.map(pic => <Image src={pic} className="hover:border rounded hover:border-white " alt="others" height={200} width={200} key={pic} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Gallery;
