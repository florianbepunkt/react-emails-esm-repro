# Repro

Repro for issue https://github.com/resend/react-email/issues/1051.

Plase run `npm install` and then `npm run emails:dev`.

The template in `src/emails/index.ts` imports a dummy object from `/src/other-part-of-project` which fails, since this project is setup as an ESM module.

**Note:** Using a non-ESM import in the template would not help, since the imported file could have imports (chain), which needs to be ESM spec compliant.
