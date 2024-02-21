import { ToastContainer, toast } from 'react-toastify';

export namespace MessageToastify
{
    export const PromiseMessage = async(data:any) => {
        // console.log(data)
        const resolveAfter3Sec = new Promise(resolve => data);

        toast.info('Cargando', {autoClose:3000})

        // toast.promise(
        //     resolveAfter3Sec,
        //     {
        //     pending: 'Promise is pending',
        //     success: 'Promise resolved 👌',
        //     error: 'Promise rejected 🤯'
        //     }
        // )
    }
}