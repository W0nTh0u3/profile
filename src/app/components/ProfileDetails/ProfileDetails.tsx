import { darken } from '@/app/styles/colors';
import SpotlightCard from '../SpotlightCard';

const RESUME_NAME: string = 'Ryan Verzo - Resume FSE 2026-04';

export const ProfileDetails = ({ bgNumber }: { bgNumber: [string, string, string] }) => {
    return (
        <section className="min-h-[100dvh] bg-black text-white flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl sm:text-6xl font-bold mb-8">Profile Details</h1>
            <div className="max-w-4xl w-full space-y-6">
                <SpotlightCard className="bg-white/10 p-8 rounded-lg" spotlightColor="rgba(255, 255, 255, 0.2)">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                            <ul className="space-y-3 text-gray-300">
                                <li>📧 Email: resjverzo@gmail.com</li>
                                <li>📍 Location: Philippines</li>
                                <li>📱 Mobile: +63 976 020 8693</li>
                                <li>💼 Open to opportunities</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Core Skills</h2>
                            <ul className="space-y-3 text-gray-300">
                                <li>• Angular Development</li>
                                <li>• Frontend Architecture</li>
                                <li>• Responsive Design</li>
                                <li>• UI/UX Implementation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <a
                            href={`/${RESUME_NAME}.pdf`}
                            target="_blank"
                            className={`inline-block px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity bg-black`}
                            style={{
                                background: `linear-gradient(to right, ${darken(bgNumber[0])}, ${darken(bgNumber[1])}, ${darken(bgNumber[2])})`
                            }}
                        >
                            View Resume
                        </a>
                    </div>
                </SpotlightCard>
            </div>
        </section>
    );
};
