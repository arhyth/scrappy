scrappy
---

Personal blog v2.0.

I wanted to improve the writing experience with something that has a WYSIWYG
interface out of the box. And so I ended up with this Strapi powered blog.

It is powered by sqlite with persistence handled by an EBS volume. I realize
just as I'm writing this README, this is no longer "local-first software" as
the previous statically generated version of this blog was. There are some
cool stuff happening around sqlite recently. In the next iteration, I will
try to make sqlite "local/cloud agnostic" and hydrate it from an S3 bucket.
