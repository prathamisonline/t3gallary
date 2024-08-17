import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/0c43f9c2-355b-4495-b255-02877ea87fed-rc8naz.jpg",
  "https://utfs.io/f/8f56eba3-f7fd-4d8d-8cee-2c5f474c9f32-etkijy.png",
  "https://utfs.io/f/e107533b-93cc-45dc-a7b5-f3d905c236d0-hk5uxt.png",
  "https://utfs.io/f/fef631a8-7a71-451b-a08f-7103c757d7ab-d08k45.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img className="h-44 w-44 object-cover" src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
