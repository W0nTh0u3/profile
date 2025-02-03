export const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                    <p className="text-sm">&copy; {new Date().getFullYear()} ResjVrz. All rights reserved.</p>
                </div>
                <div className="flex gap-6">
                    <a href="https://github.com/w0nth0u3" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/resjverzo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                        LinkedIn
                    </a>
                    <a href="mailto:resjverzo@gmail.com" className="hover:text-gray-400 transition-colors">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};
