import React from 'react';

const Register = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="mb-8 flex flex-col items-center">
                <h2 className="text-base md:text-xl font-semibold mb-2">Selamat Datang!</h2>
                <p className='text-sm md:text-base'>Silahkan masukan data anda, lalu daftar.</p>
            </div>
            <form className="w-full max-w-[360px]">
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="john.doe@company.com"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Username
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="@jhondoeee"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="•••••••••"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Daftar
                </button>
            </form>
            <p className='text-sm md:text-base mt-6 md:mt-8'>Sudah punya akun? <a href="..." className='font-medium text-blue-700'>Masuk</a></p>
        </div>
    );
};

export default Register;
