"use client";

import Image from "next/image";

import Link from "next/link";

export default function Cards() {
  return (
    <div className="card-container">
            <div className="card" style={{width: "18rem"}}>
                <Image 
                    src="/user-default.png"
                    className="card-img-top"
                    alt="product tab"
                    width={200}
                    height={200}
                />
                <div className="card-body">
                    <h5 className="card-title">Product Card</h5>
                    <p className="card-text">Add, Edit, Remove</p>
                    <Link href="/productspage" className="btn btn-primary">Click Here</Link>
                </div>
            </div>
    </div>
  )
}
