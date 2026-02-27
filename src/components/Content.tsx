function Content() {
    return (
        <div className="flex flex-col gap-4">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Random Unsplash" className="w-full" />
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
        </div>
    );
}

export default Content;