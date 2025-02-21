import React, { useEffect, useState } from 'react'


type Props = {
    projectDetailsText: string[];
    projectDetalsImage: string;
}


const ProjectDetails: React.FC<Props> = ({ projectDetailsText, projectDetalsImage }) => {

    const [image, setImage] = useState<string>(projectDetalsImage)
    useEffect(() => {
        import(`../assets/images/ai-assistant-demo.png`)
            .then((image) => {
                setImage(image.default);
            })
            .catch((error) => {
                console.error("Error loading image:", error);
            });
    }, []);
    return (
        <div className="bg-gray-50 rounded-lg shadow-md flex flex-col gap-8 p-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">MORE ABOUT THIS PROJECT</h2>
            <div className='flex gap-5'>
                <div className="w-1/2">
                    <p className="text-gray-700 mb-4">
                        {projectDetailsText[0]}
                    </p>
                    <p className="text-gray-700">
                        {projectDetailsText[1]}
                    </p>
                </div>

                <div className="w-1/2 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                        src={image}
                        alt="Laptop and Phone with Adyaia AI Assistant"
                        className="object-cover h-4/5 w-4/5"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails