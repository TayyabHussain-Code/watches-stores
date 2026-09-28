import React, { useEffect, useState } from "react";
import img1 from "../../../Imgs/img1.jpg";
import { RiArrowRightWideFill } from "react-icons/ri";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { TbSortDescending } from "react-icons/tb";
import { ProductsbyCategory } from "../../DAL/collection/collection";

const Collection = () => {
  const [productsCategory, setProductsCategory] = useState([]);
  const [currentIndexes, setCurrentIndexes] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const name = location.state?.name || "Collection";
  const baseUrl = "https://api.dialowatches.com";
  const handleProducts = async (id) => {
    const resp = await ProductsbyCategory(id);
    if (resp.success === true) {
      setProductsCategory(resp.data);
    }
  };
  console.log(productsCategory, "wdad");
  useEffect(() => {
    handleProducts(id);
  }, [id]);
  const Collections = [
    {
      id: 1,
      title: "Tissot Ballade 40mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw81f4ee7b/product-pictures/25ed1f20-4c24-43c2-a9ac-93b20056021c_T156-410-11-091-00_shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwf29a1ed3/product-pictures/a53a6204-3f21-4d09-99df-15b8b62c19cf_T156-410-11-091-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw8ba10315/product-pictures/19b0f5ac-ce56-48b8-a694-c418836e3d80_T156-410-11-091-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• 316L stainless steel case",
        "• Swiss quartz movement",
        "• Sapphire crystal with anti-reflective coating",
      ],
      originalPrice: "Rs.12,000 PKR",
      discountedPrice: "9800 ",
    },
    {
      id: 2,
      title: "Tissot Ballade 45mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwb3fc54d1/product-pictures/1a5a2687-1ee2-4e17-89a1-75998c9a01ac_T156-408-11-043-00_Shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw7ebdef88/product-pictures/e28b193d-53fb-45ca-a96b-bb73c45f3558_T156-408-11-043-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc0ceff2b/product-pictures/9d5b223e-8a33-4602-8035-402853a6c685_T156-408-11-043-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• Automatic movement",
        "• 80-hour power reserve",
        "• Transparent case back",
      ],
      originalPrice: "Rs.14,000 PKR",
      discountedPrice: "11500 ",
    },
    {
      id: 3,
      title: "Tissot Chemin Des Tourelles Skeleton 39mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwbc1c222d/product-pictures/c9b3eacb-ef18-4c0b-827b-19b4589d4df7_T139-836-36-441-00_Shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw72aecb7f/product-pictures/203ebdee-c93e-45d6-b2fd-24fe39dceffe_T139-836-36-441-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwdd102b11/product-pictures/3cd17f3d-a593-468e-9f5b-785042b13243_T139-836-36-441-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• Skeleton dial design",
        "• Domed sapphire crystal",
        "• Rose gold PVD coating",
      ],
      originalPrice: "Rs.16,000 PKR",
      discountedPrice: "12900 ",
    },
    {
      id: 4,
      title: "Tissot Chemin des Tourelles 42mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc8e7b6c3/product-pictures/c3273ab0-c8c4-4602-a7cf-ebd5f2d9ca33_T139-407-16-041-00_shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw5b0c9074/product-pictures/cd020ee5-7b30-4187-bba9-c3df5d9ebbcd_T139_407_16_041_00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw8bcd4e42/product-pictures/3ef93ef0-e771-4634-b558-71e0b90b7ee9_T139_407_16_041_00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• Water-resistant up to 50m",
        "• Date display at 6 o’clock",
        "• Butterfly clasp with push-buttons",
      ],
      originalPrice: "Rs.13,000 PKR",
      discountedPrice: "10400",
    },
    {
      id: 5,
      title: "Tissot Chemin des Tourelles 42mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc8e7b6c3/product-pictures/c3273ab0-c8c4-4602-a7cf-ebd5f2d9ca33_T139-407-16-041-00_shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw5b0c9074/product-pictures/cd020ee5-7b30-4187-bba9-c3df5d9ebbcd_T139_407_16_041_00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw8bcd4e42/product-pictures/3ef93ef0-e771-4634-b558-71e0b90b7ee9_T139_407_16_041_00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• Calf leather strap",
        "• Roman numeral indexes",
        "• Power reserve up to 60 hours",
      ],
      originalPrice: "Rs.15,000 PKR",
      discountedPrice: "11700 ",
    },
    {
      id: 6,
      title: "Tissot Chemin Des Tourelles Skeleton 39mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwbc1c222d/product-pictures/c9b3eacb-ef18-4c0b-827b-19b4589d4df7_T139-836-36-441-00_Shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw72aecb7f/product-pictures/203ebdee-c93e-45d6-b2fd-24fe39dceffe_T139-836-36-441-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwdd102b11/product-pictures/3cd17f3d-a593-468e-9f5b-785042b13243_T139-836-36-441-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• See-through case back",
        "• Swiss-made automatic caliber",
        "• Hand-polished steel case",
      ],
      originalPrice: "Rs.18,000 PKR",
      discountedPrice: "14200 ",
    },
    {
      id: 7,
      title: "Tissot Ballade 40mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwb3fc54d1/product-pictures/1a5a2687-1ee2-4e17-89a1-75998c9a01ac_T156-408-11-043-00_Shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw7ebdef88/product-pictures/e28b193d-53fb-45ca-a96b-bb73c45f3558_T156-408-11-043-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc0ceff2b/product-pictures/9d5b223e-8a33-4602-8035-402853a6c685_T156-408-11-043-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• COSC-certified chronometer",
        "• Steel bracelet with butterfly clasp",
        "• Silver dial with guilloché pattern",
      ],
      originalPrice: "Rs.17,500 PKR",
      discountedPrice: "13900 ",
    },
    {
      id: 8,
      title: "Tissot Ballade 45mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw81f4ee7b/product-pictures/25ed1f20-4c24-43c2-a9ac-93b20056021c_T156-410-11-091-00_shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwf29a1ed3/product-pictures/a53a6204-3f21-4d09-99df-15b8b62c19cf_T156-410-11-091-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw8ba10315/product-pictures/19b0f5ac-ce56-48b8-a694-c418836e3d80_T156-410-11-091-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• Silicon balance spring for precision",
        "• 80-hour power reserve",
        "• Stainless steel bezel",
      ],
      originalPrice: "Rs.19,000 PKR",
      discountedPrice: "15200 ",
    },
    {
      id: 1,
      title: "Tissot Ballade 40mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw81f4ee7b/product-pictures/25ed1f20-4c24-43c2-a9ac-93b20056021c_T156-410-11-091-00_shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwf29a1ed3/product-pictures/a53a6204-3f21-4d09-99df-15b8b62c19cf_T156-410-11-091-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw8ba10315/product-pictures/19b0f5ac-ce56-48b8-a694-c418836e3d80_T156-410-11-091-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• 316L stainless steel case",
        "• Swiss quartz movement",
        "• Sapphire crystal with anti-reflective coating",
      ],
      originalPrice: "Rs.12,000 PKR",
      discountedPrice: "9800 ",
    },
    {
      id: 2,
      title: "Tissot Ballade 45mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwb3fc54d1/product-pictures/1a5a2687-1ee2-4e17-89a1-75998c9a01ac_T156-408-11-043-00_Shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw7ebdef88/product-pictures/e28b193d-53fb-45ca-a96b-bb73c45f3558_T156-408-11-043-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc0ceff2b/product-pictures/9d5b223e-8a33-4602-8035-402853a6c685_T156-408-11-043-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• Automatic movement",
        "• 80-hour power reserve",
        "• Transparent case back",
      ],
      originalPrice: "Rs.14,000 PKR",
      discountedPrice: "11500 ",
    },
    {
      id: 3,
      title: "Tissot Chemin Des Tourelles Skeleton 39mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwbc1c222d/product-pictures/c9b3eacb-ef18-4c0b-827b-19b4589d4df7_T139-836-36-441-00_Shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw72aecb7f/product-pictures/203ebdee-c93e-45d6-b2fd-24fe39dceffe_T139-836-36-441-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwdd102b11/product-pictures/3cd17f3d-a593-468e-9f5b-785042b13243_T139-836-36-441-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• Skeleton dial design",
        "• Domed sapphire crystal",
        "• Rose gold PVD coating",
      ],
      originalPrice: "Rs.16,000 PKR",
      discountedPrice: "12900 ",
    },
    {
      id: 4,
      title: "Tissot Chemin des Tourelles 42mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc8e7b6c3/product-pictures/c3273ab0-c8c4-4602-a7cf-ebd5f2d9ca33_T139-407-16-041-00_shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw5b0c9074/product-pictures/cd020ee5-7b30-4187-bba9-c3df5d9ebbcd_T139_407_16_041_00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw8bcd4e42/product-pictures/3ef93ef0-e771-4634-b558-71e0b90b7ee9_T139_407_16_041_00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• Water-resistant up to 50m",
        "• Date display at 6 o’clock",
        "• Butterfly clasp with push-buttons",
      ],
      originalPrice: "Rs.13,000 PKR",
      discountedPrice: "10400 ",
    },
    {
      id: 5,
      title: "Tissot Chemin des Tourelles 42mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc8e7b6c3/product-pictures/c3273ab0-c8c4-4602-a7cf-ebd5f2d9ca33_T139-407-16-041-00_shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw5b0c9074/product-pictures/cd020ee5-7b30-4187-bba9-c3df5d9ebbcd_T139_407_16_041_00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw8bcd4e42/product-pictures/3ef93ef0-e771-4634-b558-71e0b90b7ee9_T139_407_16_041_00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• Calf leather strap",
        "• Roman numeral indexes",
        "• Power reserve up to 60 hours",
      ],
      originalPrice: "Rs.15,000 PKR",
      discountedPrice: "11700 ",
    },
    {
      id: 6,
      title: "Tissot Chemin Des Tourelles Skeleton 39mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwbc1c222d/product-pictures/c9b3eacb-ef18-4c0b-827b-19b4589d4df7_T139-836-36-441-00_Shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw72aecb7f/product-pictures/203ebdee-c93e-45d6-b2fd-24fe39dceffe_T139-836-36-441-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwdd102b11/product-pictures/3cd17f3d-a593-468e-9f5b-785042b13243_T139-836-36-441-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• See-through case back",
        "• Swiss-made automatic caliber",
        "• Hand-polished steel case",
      ],
      originalPrice: "Rs.18,000 PKR",
      discountedPrice: "14200 ",
    },
    {
      id: 7,
      title: "Tissot Ballade 40mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwb3fc54d1/product-pictures/1a5a2687-1ee2-4e17-89a1-75998c9a01ac_T156-408-11-043-00_Shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw7ebdef88/product-pictures/e28b193d-53fb-45ca-a96b-bb73c45f3558_T156-408-11-043-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc0ceff2b/product-pictures/9d5b223e-8a33-4602-8035-402853a6c685_T156-408-11-043-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• COSC-certified chronometer",
        "• Steel bracelet with butterfly clasp",
        "• Silver dial with guilloché pattern",
      ],
      originalPrice: "Rs.17,500 PKR",
      discountedPrice: "13900 ",
    },
    {
      id: 8,
      title: "Tissot Ballade 45mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw81f4ee7b/product-pictures/25ed1f20-4c24-43c2-a9ac-93b20056021c_T156-410-11-091-00_shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwf29a1ed3/product-pictures/a53a6204-3f21-4d09-99df-15b8b62c19cf_T156-410-11-091-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw8ba10315/product-pictures/19b0f5ac-ce56-48b8-a694-c418836e3d80_T156-410-11-091-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• Silicon balance spring for precision",
        "• 80-hour power reserve",
        "• Stainless steel bezel",
      ],
      originalPrice: "Rs.19,000 PKR",
      discountedPrice: "15200 ",
    },
    {
      id: 6,
      title: "Tissot Chemin Des Tourelles Skeleton 39mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwbc1c222d/product-pictures/c9b3eacb-ef18-4c0b-827b-19b4589d4df7_T139-836-36-441-00_Shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw72aecb7f/product-pictures/203ebdee-c93e-45d6-b2fd-24fe39dceffe_T139-836-36-441-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwdd102b11/product-pictures/3cd17f3d-a593-468e-9f5b-785042b13243_T139-836-36-441-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• See-through case back",
        "• Swiss-made automatic caliber",
        "• Hand-polished steel case",
      ],
      originalPrice: "Rs.18,000 PKR",
      discountedPrice: "14200 ",
    },
    {
      id: 7,
      title: "Tissot Ballade 40mm",
      images: [
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwb3fc54d1/product-pictures/1a5a2687-1ee2-4e17-89a1-75998c9a01ac_T156-408-11-043-00_Shadow.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw7ebdef88/product-pictures/e28b193d-53fb-45ca-a96b-bb73c45f3558_T156-408-11-043-00_B1.png?sm=fit&sw=476&sh=476,gravity=center",
        "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc0ceff2b/product-pictures/9d5b223e-8a33-4602-8035-402853a6c685_T156-408-11-043-00_WRIST.png?sm=fit&sw=476&sh=476,gravity=center",
      ],
      features: [
        "• COSC-certified chronometer",
        "• Steel bracelet with butterfly clasp",
        "• Silver dial with guilloché pattern",
      ],
      originalPrice: "Rs.17,500 PKR",
      discountedPrice: "13900 ",
    },
  ];
  // const [currentImgs, setCurrentImgs] = useState(Collections.map(() => 0));

  const handlePrev = (index, imagesLength) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [index]: prev[index] === 0 ? imagesLength - 1 : (prev[index] || 0) - 1,
    }));
  };

  const handleNext = (index, imagesLength) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [index]: prev[index] === imagesLength - 1 ? 0 : (prev[index] || 0) + 1,
    }));
  };

  return (
    <>
      <div>
        <img
          src={img1}
          alt="Catalog background"
          className=" inset-0 w-full h-screen absolute object-cover  "
        />
        <div className="absolute h-screen inset-0 bg-black/40 backdrop-blur-sm z-1"></div>
      </div>
      <div className="absolute z-20 top-20 w-full md:flex justify-between px-8 md:px-30 lg:px-35">
        <h1 className="text-3xl lg:text-[2.5rem] text-white  font-bold opacity-50">
          {name} Categories
        </h1>
        <div className="flex gap-2 lg:gap-4 mt-3 md:mt-0">
          <div className="flex items-center border border-gray-500  text-white lg:py-3 px-3 lg:px-10 rounded-lg">
            <HiOutlineAdjustmentsHorizontal className="lg:text-[1.4rem] text-white  " />
            <span className="ml-2 pointer-events-none ">Filter</span>
            <select
              className=" absolute inset-0 w-full h-full opacity-0 text-[#222] cursor-pointer  bg-[#bfbaba4a]  "
              name=""
              id=""
            >
              <option value="" className="hover:bg-pink-300">
                Preimum
              </option>
              <option value="">Men</option>
              <option value="">Women</option>
              <option value="">Couple</option>
              <option value="">Smartwatch</option>
            </select>
          </div>
          <button className="border border-gray-500 flex items-center gap-3 text-white py-1.5 lg:py-3  px-3 lg:px-8 rounded-lg opacity-85 ">
            <TbSortDescending className="lg:text-[1.4rem]" />
            Featured
          </button>
        </div>
      </div>

      <div className="flex px-8 gap-2 mt-47 md:mt-35 lg:mt-38 justify-center flex-wrap bg-black top-30 z-10  ">
        {productsCategory?.map((item, index) => {
  const images = [item.coverImage, ...(item.otherImages || [])];
  const currentIndex = currentIndexes[index] || 0;
  return (
    <div key={index} className="relative z-10 text-white mb-2 cursor-pointer">
      <div className="bg-[#e1e1e1] overflow-hidden group relative">
        <RiArrowLeftWideFill
          onClick={() => handlePrev(index, images.length)}
          className="absolute top-[45%] left-3 text-[#9d9a9a] z-20 text-3xl cursor-pointer hidden group-hover:block"
        />
        <RiArrowRightWideFill
          onClick={() => handleNext(index, images.length)}
          className="absolute top-[45%] right-3 text-[#9d9a9a] z-20 text-3xl cursor-pointer hidden group-hover:block"
        />
        <img
          src={`${baseUrl}${images[currentIndex]}`}
          alt={item.name}
          onClick={() => navigate("/product-des", { state: item })}
          className="lg:h-102 select-none transition-transform duration-500 ease-in-out transform hover:scale-103"
        />
      </div>
      <div className="p-3">
        <h1 className="text-[1.2rem]">{item.name}</h1>
        <div className="flex gap-4 mt-1">
          <p className="text-[1.1rem] line-through">Rs. {item.price} PKR</p>
          <p className="text-[1.1rem] font-medium">Rs. {item.totalprice} PKR</p>
        </div>
      </div>
    </div>
  );
})}

      </div>
    </>
  );
};

export default Collection;
