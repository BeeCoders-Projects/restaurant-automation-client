function Speciality({
                        img,
                        name,
                        color
                    }){
    const icon = img
    const dynamicBgStyle = {
        backgroundImage: `url(${icon || null})`,
    };
    return (
        <>
            <div className="flex flex-row justify-start px-4 rounded-2xl border-2 mr-8 mb-6 h-[40px] max-w-[243]" style={{
                borderColor:color
            }}>
                <div
                    className="h-[26px] w-[24px] my-1.5 mr-2 overflow-hidden rounded-xl bg-cover bg-center"
                    style={dynamicBgStyle}
                ></div>
                <div style={{color:color, fontSize:"24px"}}> {name} </div>
            </div>
        </>
    );
}

export default Speciality;