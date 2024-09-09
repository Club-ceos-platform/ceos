export function LocationSection() {
  return (
    <div className="bg-blue-900 text-white py-8">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <i className="pi pi-location-pin text-gray-50 text-2xl"></i>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Adresse :</h1>
            <p className="text-gray-300 text-sm">
              Club des CEOs, marque de DGofficehub, 9 rue des colonnes 75002
              Paris
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
