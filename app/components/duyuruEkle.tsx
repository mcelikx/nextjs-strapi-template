import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { revalidatePath } from "next/cache";

async function sendData({ params }: { params: any }) {
  const res = await fetch("http://10.200.61.11:1337/api/announcements", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 5a990e7fac480262dbd2ae74073425174f79b88739295ba4181673de1ec02c00b990baef59472d90582ed716b575498069c403f40a9898c7c9ddd45d13e17b10f11ab73a988dad7480470da3b26ac4f6e0ec0c621c762e2085a9ff758f6bc1426651ed0bd4f8a7cab8a4bfa2701d2a2322febaaa5951fd9eb5a0c898b050ee0c",
    },
    body: JSON.stringify({
      data: {
        title: params.title,
        short_description: params.short_description,
        content: params.content,
      },
    }),
  });

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  revalidatePath("/dashboard/duyurular");

  return res.json();
}

const DuyuruEkle = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      short_description: "",
      content: "",
    },
    onSubmit: (values) => {
      sendData({
        params: {
          title: values.title,
          short_description: values.short_description,
          content: values.content,
        },
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <label htmlFor="short_description">Short Des</label>
      <input
        id="short_description"
        name="short_description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.short_description}
      />
      <label htmlFor="content">Content</label>
      <input
        id="content"
        name="content"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.content}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DuyuruEkle;
