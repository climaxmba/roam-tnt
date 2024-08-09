import { Outlet, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import PackageList from "../../components/packageList/PackageList";
import travelsAPI from "../../_lib/modules/travelsAPI";

import styles from "./packages.module.scss";

export default function Packages() {
  const { packageId } = useParams();

  return (
    <Layout>
      <section className={styles.container}>
        <PackageList
          getProducts={() => Promise.resolve(travelsAPI.getTravelPackages())}
          hasPackageId={packageId ? true : false}
        />
        {packageId && (
          <div className={styles.packageDetails}>
            <Outlet />
          </div>
        )}
      </section>
    </Layout>
  );
}
