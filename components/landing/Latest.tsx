export default async () => {
    return <div>
        <h2 className={"text-2xl text-primary "}>Our Latest Race</h2>
        <iframe src="https://www.youtube.com/embed/pxE9_T-qBuI?si=m7S9qOmvCAuEyyVm"
                width={"100%"} height={"350"}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div className="grid grid-cols-3 gap-3 py-3">
            <div>
                <iframe width="100%" height="" src="https://www.youtube.com/embed/cZKb13GZ6jY?si=R9LwyC1horTdYlHA"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div>
                <iframe width="100%" height="" src="https://www.youtube.com/embed/MfPj6nALQkg?si=eKIcdKT9hb3tQe9Q"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div>
                <iframe width="100%" height="" src="https://www.youtube.com/embed/vjLfgI_llUU?si=9UQSAOz-5FBxJH_Q"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    </div>
}