import Image from 'next/image'
import React from 'react'

function Readview() {
  return (
    <section id="read-blog" className="relative max-w-7xl mx-auto mb-3 px-4">
        <Image className="rounded-lg" src="/blog-top-1.png" alt="Blog Cover" width={1920} height={1080}/>
        <div className="flex text-white mt-7 gap-x-5">
            <div className="flex-1/3 w-70">
                <h1 className="text-3xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor ipsum at imperdiet egestas.
                    Cras condimentum velit dolor, quis vulputate nunc semper id. Proin non egestas dolor.
                    Integer fringilla ante magna, et eleifend felis pellentesque vel. Morbi tempus dignissim tellus,
                    egestas sodales orci posuere at. Phasellus pellentesque tortor quis nibh porttitor ullamcorper.
                    Fusce tincidunt tortor id eros mattis, vitae ultricies mauris iaculis.
                    <br />
                    Cras convallis fringilla quam sit amet luctus. Mauris vitae nulla et felis feugiat vestibulum.
                    Fusce vel elit condimentum, tincidunt sem quis, consectetur tellus. Sed vitae dolor et est vehicula feugiat.
                    Ut non purus eget magna porta condimentum id ultrices lectus. Morbi ex ligula, maximus vitae ultrices sed,
                    tincidunt sit amet est. Curabitur et efficitur ex, id faucibus justo. Aliquam venenatis dolor eu mi hendrerit,
                    sed fermentum metus faucibus. Nulla ullamcorper libero sed velit laoreet blandit. Nulla congue consectetur
                    neque, in sagittis felis maximus quis.

                    <Image className="rounded-lg my-4" src="/blog-top-1.png" alt="Blog Cover" width={1920} height={1080}/>

                    Nullam consectetur arcu in nunc molestie, nec mattis dolor consectetur. In vel euismod turpis. Mauris neque nunc,
                    commodo non justo eget, semper auctor velit. Curabitur congue luctus mauris, vitae scelerisque nibh fermentum non.
                    Quisque pulvinar, dui ut vulputate semper, dui urna hendrerit metus, accumsan accumsan metus nisi sit amet sapien.
                    Integer justo ipsum, ullamcorper ut venenatis eget, pellentesque eget ligula. Phasellus a placerat turpis. Nullam
                    eleifend metus non urna bibendum elementum. Pellentesque enim ante, vulputate ut scelerisque vitae, molestie in orci.
                    In tincidunt viverra vehicula. Sed id ex porta, lobortis sem ut, pharetra augue. Nam dictum, nulla id porttitor fermentum,
                    nibh ex lobortis magna, et porta nibh mi vel nisi. Aenean nisi libero, varius et fringilla in, feugiat et nunc. Vivamus
                    \vitae eleifend odio, at semper ipsum. Suspendisse sollicitudin, nisi et interdum faucibus, arcu ante sagittis nulla,
                    quis malesuada mauris turpis eget massa. Maecenas pretium efficitur ipsum, vel viverra diam porttitor eget.
                </p>
            </div>
            <div className="flex-1">
                <div className="mb-5">
                    <small className="text-gray-300">Author</small>
                    <h1 className="font-bold teext-2xl">John Miko Acuesta</h1>
                    <div className="py-2 text-white">
                        <small className="inline-block border-1 border-gray-200 rounded-full px-3 py-1 mr-2 mb-2">#photography</small>
                        <small className="inline-block border-1 border-gray-200 rounded-full px-3 py-1 mr-2 mb-2">#travel</small>
                        <small className="inline-block border-1 border-gray-200 rounded-full px-3 py-1 mr-2 mb-2">#winter</small>
                    </div>
                </div>

                <div>
                    <h3 style={{ marginBottom: '10px' }}>Contributors</h3>
                    <div className="flex flex-wrap">
                        <div className="size-12 rounded-full bg-amber-50 m-1"></div>
                        <div className="size-12 rounded-full bg-amber-50 m-1"></div>
                        <div className="size-12 rounded-full bg-amber-50 m-1"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Readview