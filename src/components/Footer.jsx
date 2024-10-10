function Footer() {
  return (
    <footer className="bg-slate-900 w-full shadow dark:bg-gray-800">
      <div className="container mx-auto py-8 flex justify-center sm:justify-end">
        <span className="text-sm text-gray-300 dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Global News
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
