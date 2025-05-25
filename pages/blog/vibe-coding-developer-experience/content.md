Recently we've been bouncing around some ideas at work around how AI will change
developer experience generally and developer onboarding more immediately.
Lots of those ideas around API design and documentation are crystallized in this really nice  
[blog post](https://stytch.com/blog/if-an-ai-agent-cant-figure-out-how-your-api-works-neither-can-your-users/)
that the marketing folks put out.

The central thesis of the blog post is that clear documentation, consistent API design, and good error messages
for a product or tool will make it much easier for an LLM or an Agent to effectively use that tool.
That shouldn't be a surprise to anybody, after all we've been hearing about the importance of
[prompting](https://www.kaggle.com/whitepaper-prompt-engineering)
for several years now. The not-very-big jump the article makes is that all of those things that make an API easier for
an LLM to understand also make the API easier for a human to understand. If the LLM can read the docs for a tool
and immediately spit out some code to use it correctly, chances are a human will be able to do the same!
Conversely, if the LLM really struggles understanding, chances are that some nonzero subset of humans will struggle too.

This excites me because I think many developers (myself in particular, but I _love_ to project) are really terrible at
knowing what other people don't know. When a developer builds a \$thing, they know exactly how that \$thing works, why it works
that way, what it is good at and bad at, and all the little quirks that have accumulated over time.
Developers become world-class experts in their own products, and that makes those same developers _uniquely terrible_ at explaining
those products to other people. The most famous example of this is Haskell's monads -
which seem doomed to be explained and reexplained over and over again by engineers who understand them to engineers who don't.

The same weakness applies on a much smaller scale for nearly all the code we output. TKTKT

Agents and LLMs represent a baseline "gut check" that I wasn't able to get quickly or reliably before.
If

- fast feedback look

### Concrete Example Time

We have some email template functionality for sending Magic Links.
The email template tool was originally built out as a UI-driven experience, API management of email templates came later.
