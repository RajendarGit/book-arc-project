import React, { FC } from 'react'

interface ProductsDetailsTabProps {
    description?: string;
}

const ProductsDetailsTab:FC<ProductsDetailsTabProps> = ({description}) => {
  return (
    <div className="hidden xl:block">
      <div role="tablist" className="tabs tabs-bordered my-10">
        <input
          type="radio"
          name="products-tab"
          role="tab"
          className="tab min-w-[200px]"
          aria-label="Description"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 py-6 px-6 xl:px-0"
        >
          {description}
        </div>

        <input
          type="radio"
          name="products-tab"
          role="tab"
          className="tab min-w-[200px]"
          aria-label="Additional Info"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 py-6 px-6 xl:px-0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet
          officia voluptates consequuntur debitis, doloribus tempore facere quae
          harum eaque perspiciatis similique architecto illum, est iusto. Veniam
          magni unde corrupti enim? Est provident soluta cumque officia
          quibusdam ipsam, necessitatibus autem aperiam? A minus alias debitis
          officiis est, saepe, commodi corrupti molestias soluta, earum possimus
          excepturi? Labore esse facere sapiente quos dolores harum, quod nisi
          architecto suscipit rerum non ducimus molestias est repellendus
          explicabo magni veritatis provident iusto maxime porro. Nostrum magni
          officiis minus reprehenderit odio at libero cumque, eligendi voluptas
          voluptatibus hic dolores omnis repellendus iusto, excepturi culpa
          exercitationem error.
        </div>

        <input
          type="radio"
          name="products-tab"
          role="tab"
          className="tab min-w-[200px]"
          aria-label="Reviews"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 py-6 px-6 xl:px-0"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, porro!
          Est labore aperiam nobis facere ad natus repellendus? Non, sunt fugiat
          itaque illo nostrum sed perferendis ab tenetur, et eveniet tempore
          voluptas ea quam! Veniam ex magni vero! Accusantium facere molestiae
          eius numquam perspiciatis quis repellat modi, eveniet repellendus
          fugit.
        </div>

        <input
          type="radio"
          name="products-tab"
          role="tab"
          className="tab min-w-[200px]"
          aria-label="Video"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 py-6 px-6 xl:px-0"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit saepe
          eius sint nesciunt expedita vel necessitatibus minus, quod eveniet
          dolore officiis, quasi doloremque doloribus voluptatem laborum dolor
          adipisci itaque, incidunt aut. Animi autem hic illum nostrum nisi
          exercitationem quo ipsam officiis quae nemo labore accusantium,
          voluptatem in facilis optio itaque architecto quia magnam
          reprehenderit fugit. Vel quos aut, dignissimos atque ipsam ab itaque
          ex neque enim ipsa explicabo assumenda quidem natus pariatur expedita
          facilis dolore eos ullam iure. Mollitia facere laudantium pariatur
          totam eos fuga, nisi earum, neque consequuntur libero vel debitis
          sapiente vero illum ab. Harum exercitationem quaerat quae error
          reiciendis ullam culpa inventore sunt adipisci et a doloremque earum
          ex non natus eveniet totam minus deleniti architecto laborum, alias
          unde voluptas. Pariatur inventore illum quod officia voluptatibus
          ipsum deleniti quasi soluta labore quibusdam similique assumenda dicta
          distinctio, vero commodi totam quis architecto amet voluptatem. Nisi
          sed nihil ad dolorum unde debitis sint, alias quibusdam laborum
          inventore praesentium minus? Exercitationem esse corporis, dolor quis
          recusandae voluptate, explicabo alias distinctio debitis totam
          cupiditate enim voluptas eius sint asperiores molestiae rerum repellat
          facilis mollitia! Necessitatibus voluptatem voluptas inventore, ut
          possimus veritatis nam amet sed, perferendis voluptate saepe quam rem
          veniam iure dicta ea minima assumenda. Numquam voluptas laboriosam
          odit quaerat consequatur maxime architecto veniam! Officia odio
          quisquam deleniti ea et quis consectetur. Laboriosam consequuntur
          architecto, aperiam, perferendis eaque, ad dignissimos error soluta
          quae impedit tempore! Corrupti dolores pariatur nesciunt at rerum
          quibusdam modi quam itaque quidem, repellat obcaecati placeat harum
          facilis sed nemo. Pariatur tempora quaerat, sed incidunt aliquid
          nobis. Dicta unde veritatis quo, odit ullam iste officia praesentium
          numquam sunt, nesciunt dolor adipisci eum voluptatibus, quaerat earum
          minima esse perferendis obcaecati dolorum accusantium! In, quae
          exercitationem qui est iusto consequuntur minima illum nulla tempora
          et perferendis odit ab vero voluptas.
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsTab