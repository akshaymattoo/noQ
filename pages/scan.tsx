import Webcam from "react-webcam";

const Scan = () => {
    const videoConstraints = {
        width: { min: 480 },
        height: { min: 720 },
        aspectRatio: 0.6666666667,
        facingMode: "environment"
      };
    return (
        <div>
            <h1>hello</h1>
            <Webcam 
                videoConstraints={videoConstraints} 
                width={480} 
                height={720}
                />
        </div>
    )
}

export default Scan
