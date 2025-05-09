import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Önce konumları ekleyelim
    const locations = await Promise.all([
      prisma.location.create({
        data: {
          city: 'İstanbul',
          district: 'Karaköy',
          coordinates: JSON.stringify({ lat: 41.0232, lng: 28.9772 }),
        },
      }),
      prisma.location.create({
        data: {
          city: 'İstanbul',
          district: 'Kadıköy',
          coordinates: JSON.stringify({ lat: 40.9908, lng: 29.0259 }),
        },
      }),
      prisma.location.create({
        data: {
          city: 'Ankara',
          district: 'Kale',
          coordinates: JSON.stringify({ lat: 39.9379, lng: 32.8642 }),
        },
      }),
      prisma.location.create({
        data: {
          city: 'İzmir',
          district: 'Kordon',
          coordinates: JSON.stringify({ lat: 38.4237, lng: 27.1428 }),
        },
      }),
      prisma.location.create({
        data: {
          city: 'Eskişehir',
          district: 'Porsuk',
          coordinates: JSON.stringify({ lat: 39.7667, lng: 30.5256 }),
        },
      }),
    ]);

    // Sonra sanatçıları ekleyelim
    const artists = await Promise.all([
      prisma.artist.create({
        data: {
          name: 'Graffitici Ahmet',
          bio: 'İstanbul\'un çeşitli semtlerinde eserleri bulunan sanatçı, geleneksel Türk motiflerini modern graffiti teknikleriyle birleştirmesiyle tanınır.',
          location: 'İstanbul',
          specialty: 'Duvar Resimleri',
          startYear: 2010,
          socialMedia: JSON.stringify({
            instagram: 'graffiticiahmet',
            twitter: 'ahmetgraf',
          }),
        },
      }),
      prisma.artist.create({
        data: {
          name: 'StreetArt Collective',
          bio: '5 farklı sanatçıdan oluşan grup, sosyal mesajlar içeren çalışmalarıyla bilinir ve çeşitli sosyal sorumluluk projelerinde yer almaktadır.',
          location: 'İstanbul',
          specialty: 'Toplumsal Temalı Çalışmalar',
          startYear: 2016,
          socialMedia: JSON.stringify({
            instagram: 'streetartcollective',
            twitter: 'streetartco',
          }),
        },
      }),
      prisma.artist.create({
        data: {
          name: 'AnkaGraff',
          bio: 'Ankara\'da doğup büyümüş ve ODTÜ Güzel Sanatlar Fakültesi\'nden mezun olmuş genç bir sanatçı. Şehrin tarihini ve kültürel mirasını modern sanat formlarıyla birleştiren çalışmalarıyla tanınır.',
          location: 'Ankara',
          specialty: 'Modern Ankara Temalı Eserler',
          startYear: 2015,
          socialMedia: JSON.stringify({
            instagram: 'ankagraff',
            twitter: 'ankagraff',
          }),
        },
      }),
      prisma.artist.create({
        data: {
          name: 'Deniz Crew',
          bio: 'İzmir\'de faaliyet gösteren ve deniz temalı çalışmalar yapan bir grup. Şehrin sahil şeridindeki pek çok duvar onların çalışmalarıyla hayat bulmuştur.',
          location: 'İzmir',
          specialty: 'Deniz Temalı Duvarlar',
          startYear: 2012,
          socialMedia: JSON.stringify({
            instagram: 'denizcrew',
            twitter: 'denizcrew',
          }),
        },
      }),
      prisma.artist.create({
        data: {
          name: 'Üniversiteliler',
          bio: 'Eskişehir\'deki üniversite öğrencilerinden oluşan kolektif. Anadolu ve Osmangazi Üniversitesi çevresinde birçok eserleri bulunmaktadır.',
          location: 'Eskişehir',
          specialty: 'Kampüs ve Şehir Eserleri',
          startYear: 2018,
          socialMedia: JSON.stringify({
            instagram: 'eskiuni',
            twitter: 'eskiuni',
          }),
        },
      }),
    ]);

    // Son olarak graffiti eserlerini ekleyelim ve sanatçılarla ilişkilendirelim
    const graffitis = await Promise.all([
      prisma.graffiti.create({
        data: {
          title: 'Karaköy Duvarları',
          description: 'Karaköy\'ün tarihi dokusunu yansıtan etkileyici bir duvar çalışması.',
          year: 2023,
          imageUrl: '/images/graffiti1.jpg',
          locationId: locations[0].id,
          artists: {
            connect: { id: artists[0].id },
          },
        },
      }),
      prisma.graffiti.create({
        data: {
          title: 'Kadıköy Sokakları',
          description: 'Kadıköy sokaklarında toplumsal mesajlar içeren çarpıcı bir çalışma.',
          year: 2022,
          imageUrl: '/images/graffiti2.jpg',
          locationId: locations[1].id,
          artists: {
            connect: { id: artists[1].id },
          },
        },
      }),
      prisma.graffiti.create({
        data: {
          title: 'Ankara Kalesi',
          description: 'Ankara\'nın tarihi kalesini modern bir bakış açısıyla yorumlayan eser.',
          year: 2021,
          imageUrl: '/images/graffiti3.jpg',
          locationId: locations[2].id,
          artists: {
            connect: { id: artists[2].id },
          },
        },
      }),
      prisma.graffiti.create({
        data: {
          title: 'İzmir Kordon',
          description: 'İzmir\'in deniz kültürünü ve ruhunu yaşatan renkli bir duvar resmi.',
          year: 2023,
          imageUrl: '/images/graffiti4.jpg',
          locationId: locations[3].id,
          artists: {
            connect: { id: artists[3].id },
          },
        },
      }),
      prisma.graffiti.create({
        data: {
          title: 'Eskişehir Köprüleri',
          description: 'Porsuk Çayı köprülerini süsleyen öğrenci işi sanat eserleri.',
          year: 2022,
          imageUrl: '/images/graffiti5.jpg',
          locationId: locations[4].id,
          artists: {
            connect: { id: artists[4].id },
          },
        },
      }),
      // İki sanatçının beraber çalıştığı bir eser
      prisma.graffiti.create({
        data: {
          title: 'İstanbul Buluşması',
          description: 'İki farklı stil ve sanatçının buluştuğu ortak çalışma.',
          year: 2023,
          imageUrl: '/images/graffiti6.jpg',
          locationId: locations[0].id,
          artists: {
            connect: [{ id: artists[0].id }, { id: artists[1].id }],
          },
        },
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: 'Veritabanı başarıyla oluşturuldu',
      data: {
        locationsCount: locations.length,
        artistsCount: artists.length,
        graffitisCount: graffitis.length,
      },
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Veritabanı oluşturulurken hata oluştu',
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
} 