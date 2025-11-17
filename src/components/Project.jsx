import ProjectButton from "./ProjectButton";


export default function Project( {title, description, projectURL, children} ) {

    function handleOnClick(urlPath) {
        window.location.href = 'https://www.rbobbyb.com/' + urlPath + "/";
    }

    return (
        <>
            <button onClick={() => handleOnClick(projectURL)}>
                <h1>
                    {title}
                </h1>
                <p>
                    {description}
                </p>

            </button>
        </>
    )
}