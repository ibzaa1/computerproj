import Head from 'next/head';
import Navbar2 from '../../components/navbar2';

export default function Home() {
  return (
    <>
      <Head>
        <title>Main Page</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar2 />
      <div className='h-screen dark:bg-gray-900 grid items-center justify-items-center'>
        <div className='h-20 w-3/5 dark:bg-gray-500 border-2'>
          <div>
            <div className='border-2 p-2 w-2/5 flex items-center h-full'>
              <h1 className='text-2xl text-white'>Capsule # / CapName</h1>
            </div>
            <div>Hello</div>
          </div>
        </div>
        <div className='h-20 w-3/5 dark:bg-gray-500 border-2'></div>
        <div className='h-20 w-3/5 dark:bg-gray-500 border-2'></div>
        <div className='h-20 w-3/5 dark:bg-gray-500 border-2'></div>
      </div>
    </>
  );
}
