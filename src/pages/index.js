import Image from 'next/image';
import { Inter } from 'next/font/google';
import LandingPage from './home/LandingPage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
		>
			<LandingPage />
		</main>
	);
}
