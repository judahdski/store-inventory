import React, { useState } from 'react';

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = () => {
        setIsLogin((statusbar) => !statusbar);
    };

    return (
        <div className="w-full bg-[#FE3030] flex justify-center">
            <div className="px-8 md:px-12 py-4 md:py-4.5 max-w-7xl w-full flex justify-between items-center">
                <h1 className="text-base md:text-xl text-white font-semibold">Toko Sebelah</h1>

                {isLogin ? (
                    <div className="w-[32px] md:w-[36px] aspect-square rounded-full bg-slate-300 overflow-hidden shadow">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="User Picture" />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Header;
