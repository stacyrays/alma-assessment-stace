'use client'
import { useEffect, useState } from 'react';
import { FormData } from '../form/api/data';

const ArrowIcon = () => {
    return (
        <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
        </svg>
    )
}

const List = () => {
    const [data, setData] = useState<FormData>([]);

    useEffect(() => {
        (async() => {
            const response = await fetch('../form/api', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            setData(data);
        })()
    }, [])
    
    const handleUpdateStatus = async (id:any) => {
        // e.preventDefault();

        const userToUpdate = data.find((user) => user.id === id);

        const updateData = data.map((user) => {
            if (user.id === id) {
                return {
                    ...user,
                    status: 'Reached Out'
                }
            } else {
                return user;
            }
        })
        setData(updateData);
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                               Name
                                <ArrowIcon />
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                               Submitted
                               <ArrowIcon />
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                Status
                                <ArrowIcon />
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                Country
                                <ArrowIcon />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((user) => {
                        return (
                            <tr key={user.id} className="border-b bg-gray-100 border-gray-300 text-slate-900">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {`${user.firstname} ${user.lastname}`}
                                </td>
                                <td className="px-6 py-4">
                                    02/02/2024, 2:45 PM
                                </td>
                                <td>
                                    <button className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto p-1.5 text-center  dark:focus:ring-blue-800" onClick={() => handleUpdateStatus(user.id)}>{user.status}</button>
                                </td>
                                <td>
                                    {user.country}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default List;