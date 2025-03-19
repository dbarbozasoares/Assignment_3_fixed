/********************************************************************************
 * WEB422 – Test 04
 *
 * I declare that this assignment is my own work in accordance with Seneca's
 * Academic Integrity Policy:
 * https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 * Name: Diego B Soares Student ID: ____145820239____ Date: __mar - 18 - 2025_______
 * Published URL: _________________https://github.com/dbarbozasoares/Assignment_3_fixed__________________________________________
 ********************************************************************************/
import { useRouter } from "next/router";
import useSWR from "swr";
import ListingDetails from "@/components/ListingDetails";
import Error from "next/error";
import PageHeader from "@/components/PageHeader";

const Listing = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(
    `https://webassignments-three.vercel.app/api/listings/${id}`
  );

  if (!id) return null;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <Error statusCode={404} />;
  }

  return (
    <div>
      <PageHeader text={data.name} />
      <ListingDetails listing={data} />
    </div>
  );
};

export default Listing;
