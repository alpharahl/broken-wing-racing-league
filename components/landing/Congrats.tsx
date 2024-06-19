export default async () => {
    return (
        <div className={" w-full p-3 my-3"}>
            <h2 className={"text-xl text-primary"}>Our Winners</h2>
            <h3 className="text-lg mt-5">GT3 Season 8</h3>
            <ul>
                <li>Pro: <span className="text-accent">Trey Mistak</span></li>
                <li>Am: <span className="text-accent">Jeff Kaufhold</span></li>
                <li>Team: <span className="text-accent">Going Camping</span></li>
            </ul>
            <h3 className="text-lg mt-5">SF Lights Season 2</h3>
            <ul>
                <li>1st: <span className="text-accent">Leo Ovtcharov</span></li>
                <li>2nd: <span className="text-accent">Trey Mistak</span></li>
                <li>3rd: <span className="text-accent">Chris Chitterling</span></li>
            </ul>
        </div>
    )
}