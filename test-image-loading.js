#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Testing image loading for AWS Community Day Cebu 2025...\n');

// Test speaker images
console.log('📸 Checking Speaker Images:');
const speakersComponent = fs.readFileSync('./components/speakers.tsx', 'utf8');
const speakerImagePaths = speakersComponent.match(/\/images\/speakers\/[^"]+/g) || [];

speakerImagePaths.forEach(imagePath => {
  const fullPath = path.join('./public', imagePath);
  const exists = fs.existsSync(fullPath);
  const status = exists ? '✅' : '❌';
  console.log(`  ${status} ${imagePath}`);
  
  if (exists) {
    const stats = fs.statSync(fullPath);
    const sizeKB = Math.round(stats.size / 1024);
    console.log(`     Size: ${sizeKB}KB`);
  }
});

console.log('\n👥 Checking Volunteer Images:');
const volunteersComponent = fs.readFileSync('./components/volunteers.tsx', 'utf8');
const volunteerImagePaths = volunteersComponent.match(/\/images\/volunteers\/[^"]+/g) || [];

let missingCount = 0;
let totalSize = 0;

volunteerImagePaths.forEach(imagePath => {
  const fullPath = path.join('./public', imagePath);
  const exists = fs.existsSync(fullPath);
  const status = exists ? '✅' : '❌';
  console.log(`  ${status} ${imagePath}`);
  
  if (exists) {
    const stats = fs.statSync(fullPath);
    const sizeKB = Math.round(stats.size / 1024);
    totalSize += stats.size;
    console.log(`     Size: ${sizeKB}KB`);
  } else {
    missingCount++;
  }
});

console.log('\n📊 Summary:');
console.log(`  Speaker images: ${speakerImagePaths.length} total`);
console.log(`  Volunteer images: ${volunteerImagePaths.length} total`);
console.log(`  Missing images: ${missingCount}`);
console.log(`  Total image size: ${Math.round(totalSize / 1024 / 1024)}MB`);

if (missingCount === 0) {
  console.log('\n🎉 All images are present and accounted for!');
} else {
  console.log(`\n⚠️  ${missingCount} images are missing and need to be added.`);
}
